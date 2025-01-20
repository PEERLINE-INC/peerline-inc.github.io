export declare class MultiViewSource {
    thumbnailUrl: string;
    title: string;
    description: string;
    url: string;
    isPanorama?: boolean | undefined;
    constructor(thumbnailUrl: string, title: string, description: string, url: string, isPanorama?: boolean | undefined);
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
    backIconType?: 'close' | 'arrowLeft';
    url: string;
    isPanorama?: boolean;
    width?: number | undefined;
    height?: number | undefined;
    multiViewSources?: MultiViewSource[];
    tags?: TagProps[];
    tagMenus?: TagMenuProps[];
    onClickAddTag?: (data: OnClickAddTagEventObject) => void;
    onChangeClipDuration?: (data: number[]) => void;
    enableDefaultFullscreen?: boolean;
    onChangeFullScreen?: (isFullScreen: boolean) => void;
    onClickTagButton?: () => void;
    onClickClipSave?: () => void;
    onClickTagSave?: () => void;
    onClickTagCancel?: () => void;
    disableClip?: boolean;
    disableTag?: boolean;
    disableMultiView?: boolean;
};
