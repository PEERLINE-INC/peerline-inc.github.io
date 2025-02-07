interface AdState {
    isPlayAd: boolean;
    setIsPlayAd: (isPlayAd: boolean) => void;
    enablePrerollAd: boolean;
    setEnablePrerollAd: (enablePrerollAd: boolean) => void;
    prerollAdUrl: string;
    setPrerollAdUrl: (prerollAdUrl: string) => void;
}
declare const useAdStore: import('zustand').UseBoundStore<import('zustand').StoreApi<AdState>>;
export default useAdStore;
