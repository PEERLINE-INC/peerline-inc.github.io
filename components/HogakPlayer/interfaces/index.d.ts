export declare class MultiViewSource {
    thumbnailUrl: string;
    title: string;
    url: string;
    constructor(thumbnailUrl: string, title: string, url: string);
}
export declare class TagProps {
    id: string | number;
    seconds: number;
    title: string;
    iconUrl: string;
    constructor(id: string | number, seconds: number, title: string, iconUrl: string);
}
export declare class TagMenuProps {
    id: string | number;
    title: string;
    iconUrl: string;
    constructor(id: string | number, title: string, iconUrl: string);
}
export type OnClickAddTagEventObject = {
    id: string | number;
    title: string;
    seconds: number;
};
export type HogakPlayerProps = {
    title?: string;
    isPlay?: boolean;
    setIsPlay?: (isPlay: boolean) => void;
    onBack?: () => void;
    url: string;
    width?: number | undefined;
    height?: number | undefined;
    multiViewSources?: MultiViewSource[];
    tags?: TagProps[];
    tagMenus?: TagMenuProps[];
    onClickAddTag?: (data: OnClickAddTagEventObject) => void;
};
