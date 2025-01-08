interface ClipState {
    currentSeconds: number;
    setCurrentSeconds: (currentSeconds: number) => void;
}
declare const useClipStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ClipState>>;
export default useClipStore;
