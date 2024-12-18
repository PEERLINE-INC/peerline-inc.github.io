export declare class MultiViewSource {
    thumbnailUrl: string;
    title: string;
    url: string;
    constructor(thumbnailUrl: string, title: string, url: string);
}
export declare class TagProps {
    seconds: number;
    title: string;
    iconType: string;
    constructor(seconds: number, title: string, iconType: string);
}
export type OnClickAddTagEventObject = {
    name: string;
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
    onClickAddTag?: (data: OnClickAddTagEventObject) => void;
};
