interface PlayerState {
    url: string;
    setUrl: (url: string) => void;
    title: string;
    setTitle: (title: string) => void;
    pip: boolean;
    setPip: (pip: boolean) => void;
    isPlay: boolean;
    setIsPlay: (isPlay: boolean) => void;
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
}
declare const usePlayerStore: import('zustand').UseBoundStore<import('zustand').StoreApi<PlayerState>>;
export default usePlayerStore;
