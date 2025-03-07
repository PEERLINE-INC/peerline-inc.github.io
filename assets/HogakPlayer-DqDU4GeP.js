import{j as e}from"./extends-D3Yxk-8j.js";import{u as t}from"./index-CDYFFwD0.js";import{M as l,d as a,C as i}from"./index-Dim3NWvy.js";import{S as o,B as c}from"./HogakPlayer.stories-BxDoCT7R.js";import"./index-Bp_FPQJ0.js";import"./iframe-D_L-YAj8.js";import"../sb-preview/runtime.js";import"./index-DmkVlqCC.js";import"./index-D8GVpBzL.js";import"./index-CPQ5SnY9.js";import"./index-TpcTfkuV.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new r.Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="a18c69fd-5628-4132-9ded-d4f0101f907c",r._sentryDebugIdIdentifier="sentry-dbid-a18c69fd-5628-4132-9ded-d4f0101f907c")}catch{}function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"hogakplayer",children:"HogakPlayer"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(a,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"getcurrentseconds",children:e.jsx(n.code,{children:"getCurrentSeconds()"})}),`
`,e.jsx(n.p,{children:"현재 재생 중인 시간을 초 단위로 반환합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
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
`,e.jsx(n.h3,{id:"setclipviewisshow-boolean-initialcurrentseconds-number",children:e.jsx(n.code,{children:"setClipView(isShow: boolean, initialCurrentSeconds?: number)"})}),`
`,e.jsxs(n.p,{children:["클립 모드를 설정합니다. ",e.jsx("br",{}),`
initialCurrentSeconds 가 제공되지 않으면, 현재 재생 중인 시간을 기준으로 클립 뷰를 설정합니다. `,e.jsx("br",{}),`
initialCurrentSeconds 가 제공되면, 해당 시간을 기준으로 클립 뷰를 설정합니다.`]}),`
`,e.jsx(n.h4,{id:"예시-코드-1",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ setClipView: (value: boolean, clipValues?: number[]) => void } | null>(null);

  const handleOnClipView = () => {
    if (playerRef.current) {
      // 클립 뷰 켜기
      playerRef.current.setClipView(true);
    }
  };

  return (
    <div>
      <HogakPlayer
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        ref={playerRef}
      />
      <button onClick={handleOnClipView}>클립 켜기</button>
    </div>
  );
`})}),`
`,e.jsx(n.h3,{id:"setclipvaluesvalues-number",children:e.jsx(n.code,{children:"setClipValues(values: number[])"})}),`
`,e.jsxs(n.p,{children:["클립 시작 시간과 끝 시간을 설정합니다. ",e.jsx("br",{}),`
배열에는 시작 시간과 끝 시간이 들어가며, 시작 시간은 끝 시간보다 작아야 합니다. `,e.jsx("br",{}),`
setClipView(true) 이후 호출해야 합니다.`]}),`
`,e.jsx(n.h4,{id:"예시-코드-2",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ setClipValues: (values: number[]) => void } | null>(null);

  const handleOnClipValues = () => {
    if (playerRef.current) {
      // 클립 뷰 켜기
      playerRef.current.setClipValues([10, 20]);
    }
  };

  return (
    <div>
      <HogakPlayer
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        ref={playerRef}
      />
      <button onClick={handleOnClipValues}>클립 값 설정</button>
    </div>
  );
`})}),`
`,e.jsx(n.h3,{id:"settagviewisshow-boolean",children:e.jsx(n.code,{children:"setTagView(isShow: boolean)"})}),`
`,e.jsx(n.p,{children:"태그 모드를 설정합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드-3",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ setTagView: (value: boolean) => void } | null>(null);

  const handleOnTagView = () => {
    if (playerRef.current) {
      // 태그 뷰 켜기
      playerRef.current.setTagView(true);
    }
  };

  return (
    <div>
      <HogakPlayer
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        ref={playerRef}
      />
      <button onClick={handleOnTagView}>태그 뷰 켜기</button>
    </div>
  );
`})}),`
`,e.jsx(n.h3,{id:"setisviewthumbmarkerisshow-boolean",children:e.jsx(n.code,{children:"setIsViewThumbMarker(isShow: boolean)"})}),`
`,e.jsx(n.p,{children:"재생바에 태그 생성을 위한 마커의 표시 여부를 설정합니다."}),`
`,e.jsx(n.h4,{id:"예시-코드-4",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ setIsViewThumbMarker: (value: boolean) => void } | null>(null);

  const handleOnThumbMarker = () => {
    if (playerRef.current) {
      playerRef.current.setIsViewThumbMarker(true);
    }
  };
`})}),`
`,e.jsx(n.h3,{id:"seektovalue-number-type-seconds--fraction",children:e.jsx(n.code,{children:'seekTo(value: number, type: "seconds" | "fraction")'})}),`
`,e.jsxs(n.p,{children:["재생 시간을 설정합니다. ",e.jsx("br",{}),`
type이 "seconds"이면 초 단위로 설정하고, "fraction"이면 재생 시간의 비율(0 ~ 1 사이)로 설정합니다.`]}),`
`,e.jsx(n.h4,{id:"예시-코드-5",children:"예시 코드"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ seekTo: (value: number, type: "seconds" | "fraction") => void } | null>(null);

  const handleOnSeekTo = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(10, "seconds");
    }
  };
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{})]})}function R(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{R as default};
