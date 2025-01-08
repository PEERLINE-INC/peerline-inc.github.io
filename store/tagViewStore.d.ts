import { TagMenuProps, TagProps } from '../components/HogakPlayer/interfaces';

interface TagState {
    tags: TagProps[];
    setTags: (tags: TagProps[]) => void;
    tagMenus: TagMenuProps[];
    setTagMenus: (tagMenus: TagMenuProps[]) => void;
}
declare const useTagStore: import('zustand').UseBoundStore<import('zustand').StoreApi<TagState>>;
export default useTagStore;
