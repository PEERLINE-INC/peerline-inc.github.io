interface ClipState {
    currentSeconds: number;
    setCurrentSeconds: (currentSeconds: number) => void;
    eventId: string;
    setEventId: (eventId: string) => void;
    clipApiHost: string;
    setClipApiHost: (clipApiHost: string) => void;
}
declare const useClipStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ClipState>>;
export default useClipStore;
