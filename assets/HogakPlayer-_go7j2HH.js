import{j as n}from"./inheritsLoose-C5PyBqJG.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{M as s,d as a,C as i}from"./index-CnMHUEA-.js";import{S as o,B as c}from"./HogakPlayer.stories-BuWQMdGU.js";import"./index-uubelm5h.js";import"./iframe-B5IimcpI.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-EfKdj8Ok.js";import"./index-DrFu-skq.js";import"./index-D3eZ-H7s.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:o}),`
`,n.jsx(e.h1,{id:"hogakplayer",children:"HogakPlayer"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(a,{of:c}),`
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
`,n.jsx(e.h3,{id:"setclipviewisshow-boolean",children:n.jsx(e.code,{children:"setClipView(isShow: boolean)"})}),`
`,n.jsx(e.p,{children:"클립 모드를 설정합니다."}),`
`,n.jsx(e.h4,{id:"예시-코드-1",children:"예시 코드"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ setClipView: (value: boolean) => void } | null>(null);

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
`,n.jsx(e.h3,{id:"setclipvaluesvalues-number",children:n.jsx(e.code,{children:"setClipValues(values: number[])"})}),`
`,n.jsxs(e.p,{children:["클립 시작 시간과 끝 시간을 설정합니다. ",n.jsx("br",{}),`
배열에는 시작 시간과 끝 시간이 들어가며, 시작 시간은 끝 시간보다 작아야 합니다. `,n.jsx("br",{}),`
setClipView(true) 이후 호출해야 합니다.`]}),`
`,n.jsx(e.h4,{id:"예시-코드-2",children:"예시 코드"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
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
`,n.jsx(e.h3,{id:"settagviewisshow-boolean",children:n.jsx(e.code,{children:"setTagView(isShow: boolean)"})}),`
`,n.jsx(e.p,{children:"태그 모드를 설정합니다."}),`
`,n.jsx(e.h4,{id:"예시-코드-3",children:"예시 코드"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
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
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(i,{})]})}function b(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{b as default};
