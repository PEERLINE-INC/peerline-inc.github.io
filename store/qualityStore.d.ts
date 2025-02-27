import { default as QualityLevel } from 'videojs-contrib-quality-levels/dist/types/quality-level';

interface QualityState {
    qualityLevels: QualityLevel[];
    setQualityLevels: (callback: (prev: QualityLevel[]) => QualityLevel[]) => void;
    currentQuality: number;
    setCurrentQuality: (quality: number) => void;
    clearQualityLevels: () => void;
}
declare const useQualityStore: import('zustand').UseBoundStore<import('zustand').StoreApi<QualityState>>;
export default useQualityStore;
