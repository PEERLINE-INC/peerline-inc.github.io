import { MultiViewSource } from '../components/HogakPlayer/interfaces';

interface MultiViewState {
    multiViewSources: MultiViewSource[];
    setMultiViewSources: (multiViewSources: MultiViewSource[]) => void;
    pendingSeek: number | null;
    setPendingSeek: (pendingSeek: number | null) => void;
}
declare const useMultiViewStore: import('zustand').UseBoundStore<import('zustand').StoreApi<MultiViewState>>;
export default useMultiViewStore;
