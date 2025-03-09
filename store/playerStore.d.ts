interface PlayerState {
    url: string;
    setUrl: (url: string) => void;
    thumbnailUrl: string;
    setThumbnailUrl: (thumbnailUrl: string) => void;
    isLive: boolean;
    setIsLive: (isLive: boolean) => void;
    title: string;
    setTitle: (title: string) => void;
    pip: boolean;
    setPip: (pip: boolean) => void;
    isPlay: boolean;
    setIsPlay: (isPlay: boolean) => void;
    isReady: boolean;
    setIsReady: (isReady: boolean) => void;
    isSeek: boolean;
    setIsSeek: (isSeek: boolean) => void;
    duration: number;
    setDuration: (duration: number) => void;
    played: number;
    setPlayed: (played: number) => void;
    isMute: boolean;
    setIsMute: (isMute: boolean) => void;
    volume: number;
    setVolume: (volume: number) => void;
    speed: number;
    setSpeed: (speed: number) => void;
    quality: number;
    setQuality: (quality: number) => void;
    isFullScreen: boolean;
    setIsFullScreen: (isFullScreen: boolean) => void;
    isShowMultiView: boolean;
    setIsShowMultiView: (isShowMultiView: boolean) => void;
    isShowTagView: boolean;
    setIsShowTagView: (isShowTagView: boolean) => void;
    isShowClipView: boolean;
    setIsShowClipView: (isShowClipView: boolean) => void;
    backIconType: 'close' | 'arrowLeft';
    setBackIconType: (backIconType: 'close' | 'arrowLeft') => void;
    skipDirection: 'left' | 'right' | null;
    setSkipDirection: (skipDirection: 'left' | 'right' | null) => void;
    isViewThumbMarker: boolean;
    setIsViewThumbMarker: (isViewThumbMarker: boolean) => void;
    isShowTagSaveView: boolean;
    setIsShowTagSaveView: (isShowTagSaveView: boolean) => void;
    isPanoramaMode: boolean;
    setIsPanoramaMode: (isPanoramaMode: boolean) => void;
    isDisableClip: boolean;
    setIsDisableClip: (isDisableClip: boolean) => void;
    isDisableTag: boolean;
    setIsDisableTag: (isDisableTag: boolean) => void;
    isDisableMultiView: boolean;
    setIsDisableMultiView: (isDisableMultiView: boolean) => void;
    isDisablePlayer: boolean;
    setIsDisablePlayer: (isDisablePlayer: boolean) => void;
    enableScoreBoardOverlay: boolean;
    setEnableScoreBoardOverlay: (enableScoreBoardOverlay: boolean) => void;
    scoreBoardOverlayUrl: string;
    setScoreBoardOverlayUrl: (scoreBoardOverlayUrl: string) => void;
    offsetStart: number;
    setOffsetStart: (offsetStart: number) => void;
    offsetEnd: number;
    setOffsetEnd: (offsetEnd: number) => void;
    enableLeftRightArrowButton: boolean;
    setEnableLeftRightArrowButton: (enableLeftRightArrowButton: boolean) => void;
    onClickLeftArrowButton: () => void;
    setOnClickLeftArrowButton: (onClickLeftArrowButton: () => void) => void;
    onClickRightArrowButton: () => void;
    setOnClickRightArrowButton: (onClickRightArrowButton: () => void) => void;
    isShowChromecastButton: boolean;
    setIsShowChromecastButton: (isShowChromecastButton: boolean) => void;
    isShowErrorView: boolean;
    setIsShowErrorView: (isShowErrorView: boolean) => void;
    errorMessage: string;
    setErrorMessage: (errorMessage: string) => void;
    offsetSeek: number;
    setOffsetSeek: (offsetSeek: number) => void;
    resetPlayerStore: () => void;
}
export declare function createPlayerStore(): import('zustand').UseBoundStore<import('zustand').StoreApi<PlayerState>>;
export {};
