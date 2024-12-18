import { OnClickAddTagEventObject } from '../HogakPlayer/interfaces';

interface TagViewPopoverProps {
    isShow: boolean;
    onAddTagClick?: (data: OnClickAddTagEventObject) => void;
}
export declare const TagViewPopover: ({ isShow, onAddTagClick }: TagViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
