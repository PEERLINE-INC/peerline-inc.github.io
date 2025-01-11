interface PlayerState {
    url: string;
    setUrl: (url: string) => void;
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
    volume: number;
    setVolume: (volume: number) => void;
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
}
declare const usePlayerStore: import('zustand').UseBoundStore<import('zustand').StoreApi<PlayerState>>;
export default usePlayerStore;
