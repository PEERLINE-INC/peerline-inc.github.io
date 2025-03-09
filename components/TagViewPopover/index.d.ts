import { OnClickAddTagEventObject } from '../HogakPlayer/interfaces';
import { createPlayerStore } from '../../store/playerStore';

interface TagViewPopoverProps {
    playerStore: ReturnType<typeof createPlayerStore>;
    isShow: boolean;
    onAddTagClick?: (data: OnClickAddTagEventObject) => void;
}
export declare const TagViewPopover: ({ isShow, onAddTagClick, playerStore }: TagViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
