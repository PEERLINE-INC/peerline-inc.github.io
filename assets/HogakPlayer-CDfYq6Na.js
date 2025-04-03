import{j as e}from"./extends-CGe5f_0W.js";import{u as s}from"./index-B_E7Rm5r.js";import{M as o,d as l,C as a}from"./index-DNToaVAP.js";import{S as i,B as c}from"./HogakPlayer.stories-CsAm5w3K.js";import"./index-Dlylp9S-.js";import"./iframe-VYsYv-QS.js";import"../sb-preview/runtime.js";import"./index-BSa-Fnj6.js";import"./index-D8GVpBzL.js";import"./index-Cg6iGESQ.js";import"./index-TpcTfkuV.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new r.Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="52e12d38-5045-40fe-9292-7aeebfb18e9b",r._sentryDebugIdIdentifier="sentry-dbid-52e12d38-5045-40fe-9292-7aeebfb18e9b")}catch{}function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"hogakplayer",children:"HogakPlayer"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(l,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"getcurrentseconds",children:e.jsx(n.code,{children:"getCurrentSeconds()"})}),`
`,e.jsx(n.p,{children:"현재 재생 중인 시간을 초 단위로 반환합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(n.h3,{id:"setclipviewisshow-boolean-initialcurrentseconds-number",children:e.jsx(n.code,{children:"setClipView(isShow: boolean, initialCurrentSeconds?: number)"})}),`
`,e.jsxs(n.p,{children:["클립 모드를 설정합니다. ",e.jsx("br",{}),`\r
initialCurrentSeconds 가 제공되지 않으면, 현재 재생 중인 시간을 기준으로 클립 뷰를 설정합니다. `,e.jsx("br",{}),`\r
initialCurrentSeconds 가 제공되면, 해당 시간을 기준으로 클립 뷰를 설정합니다.`]}),`
`,e.jsx(n.h4,{id:"예시-코드-1",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(n.h3,{id:"setclipvaluesvalues-number",children:e.jsx(n.code,{children:"setClipValues(values: number[])"})}),`
`,e.jsxs(n.p,{children:["클립 시작 시간과 끝 시간을 설정합니다. ",e.jsx("br",{}),`\r
배열에는 시작 시간과 끝 시간이 들어가며, 시작 시간은 끝 시간보다 작아야 합니다. `,e.jsx("br",{}),`\r
setClipView(true) 이후 호출해야 합니다.`]}),`
`,e.jsx(n.h4,{id:"예시-코드-2",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(n.h3,{id:"settagviewisshow-boolean",children:e.jsx(n.code,{children:"setTagView(isShow: boolean)"})}),`
`,e.jsx(n.p,{children:"태그 모드를 설정합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드-3",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(n.h3,{id:"setisviewthumbmarkerisshow-boolean",children:e.jsx(n.code,{children:"setIsViewThumbMarker(isShow: boolean)"})}),`
`,e.jsx(n.p,{children:"재생바에 태그 생성을 위한 마커의 표시 여부를 설정합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드-4",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(n.h3,{id:"seektovalue-number-type-seconds--fraction",children:e.jsx(n.code,{children:'seekTo(value: number, type: "seconds" | "fraction")'})}),`
`,e.jsxs(n.p,{children:["재생 시간을 설정합니다. ",e.jsx("br",{}),`\r
type이 "seconds"이면 초 단위로 설정하고, "fraction"이면 재생 시간의 비율(0 ~ 1 사이)로 설정합니다.`]}),`
`,e.jsx(n.h4,{id:"예시-코드-5",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(n.h3,{id:"setisshowchromecastbuttonvalue-boolean",children:e.jsx(n.code,{children:"setIsShowChromecastButton(value: boolean)"})}),`
`,e.jsx(n.p,{children:"크롬캐스트 버튼의 표시 여부를 설정합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드-6",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ setIsShowChromecastButton: (value: boolean) => void } | null>(null); \r
\r
  const handleOnSetIsShowChromecastButton = () => {\r
    if (playerRef.current) {\r
      playerRef.current.setIsShowChromecastButton(true);\r
    }\r
  };
`})}),`
`,e.jsx(n.h3,{id:"getisshowchromecastbutton",children:e.jsx(n.code,{children:"getIsShowChromecastButton()"})}),`
`,e.jsx(n.p,{children:"크롬캐스트 버튼의 표시 여부를 반환합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드-7",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ getIsShowChromecastButton: () => boolean } | null>(null);\r
\r
  const handleOnGetIsShowChromecastButton = () => {\r
    if (playerRef.current) {\r
      const isShowChromecastButton = playerRef.current.getIsShowChromecastButton();\r
      console.log('isShowChromecastButton', isShowChromecastButton);\r
    }\r
  };
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{})]})}function R(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{R as default};
