import { TagMenuProps, TagProps } from '../components/HogakPlayer/interfaces';

interface TagState {
    tags: TagProps[];
    setTags: (tags: TagProps[]) => void;
    tagMenus: TagMenuProps[];
    setTagMenus: (tagMenus: TagMenuProps[]) => void;
}
declare const useTagStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<TagState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<TagState, TagState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: TagState) => void) => () => void;
        onFinishHydration: (fn: (state: TagState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<TagState, TagState>>;
    };
}>;
export default useTagStore;
