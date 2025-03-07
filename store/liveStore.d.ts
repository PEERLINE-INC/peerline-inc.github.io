interface LiveState {
    atLive: boolean;
    setAtLive: (atLive: boolean) => void;
    resetLiveStore: () => void;
}
declare const useLiveStore: import('zustand').UseBoundStore<import('zustand').StoreApi<LiveState>>;
export default useLiveStore;
