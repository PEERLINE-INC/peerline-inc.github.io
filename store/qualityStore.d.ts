import { default as QualityLevel } from 'videojs-contrib-quality-levels/dist/types/quality-level';

interface QualityState {
    qualityLevels: (QualityLevel & {
        url?: string;
    })[];
    setQualityLevels: (callback: (prev: QualityLevel[]) => QualityLevel[]) => void;
    currentQuality: number | null;
    setCurrentQuality: (quality: number) => void;
    clearQualityLevels: () => void;
}
declare const useQualityStore: import('zustand').UseBoundStore<import('zustand').StoreApi<QualityState>>;
export default useQualityStore;
