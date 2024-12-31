interface ClipState {
    currentSeconds: number;
    setCurrentSeconds: (currentSeconds: number) => void;
}
declare const useClipStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<ClipState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<ClipState, ClipState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ClipState) => void) => () => void;
        onFinishHydration: (fn: (state: ClipState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<ClipState, ClipState>>;
    };
}>;
export default useClipStore;
